param(
  [switch]$SkipReport,
  [switch]$SkipCommit,
  [switch]$SkipPush,
  [string]$CommitMessage
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$githubPagesRoot = $repoRoot
$playgroundRoot = Split-Path -Parent (Split-Path -Parent (Split-Path -Parent $repoRoot))
$pipelineRoot = "C:\Users\devri\Projects\ame-intelligence"

$publishDataPath = Join-Path $githubPagesRoot "data\ame-proof-app-data.js"
$localDataPath = Join-Path $playgroundRoot "data\ame-proof-app-data.js"
$indexPath = Join-Path $githubPagesRoot "index.html"
$guidedPath = Join-Path $githubPagesRoot "guided-demo.html"
$morningPath = Join-Path $githubPagesRoot "artifacts\ame-proof-morning-digest.html"
$briefPath = Join-Path $githubPagesRoot "artifacts\ame-proof-daily-briefing.html"

function Update-AppDataReference {
  param(
    [string]$Path,
    [string]$ReferencePrefix
  )

  if (-not (Test-Path $Path)) {
    return
  }

  $version = Get-Date -Format "yyyyMMdd-HHmmss"
  $content = Get-Content -Raw $Path
  $escapedPrefix = [regex]::Escape($ReferencePrefix)
  $pattern = $escapedPrefix + 'ame-proof-app-data\.js(\?v=[^"]+)?'
  $replacement = $ReferencePrefix + "ame-proof-app-data.js?v=" + $version
  $updated = [regex]::Replace($content, $pattern, $replacement)

  if ($updated -ne $content) {
    Set-Content -Path $Path -Value $updated -Encoding UTF8
  }
}

if (-not (Test-Path $pipelineRoot)) {
  throw "Pipeline root not found: $pipelineRoot"
}

Write-Host ""
Write-Host "AME live publish pipeline"
Write-Host "Pipeline root: $pipelineRoot"
Write-Host "Publish repo:  $githubPagesRoot"
Write-Host ""

Push-Location $pipelineRoot
try {
  if (-not $SkipReport) {
    Write-Host "Running intake pipeline report..."
    & py -3 main.py --sources merx muni --no-browser
  }

  Write-Host "Generating GitHub Pages data bundle..."
  & py -3 generate_data_js.py $publishDataPath
}
finally {
  Pop-Location
}

if (Test-Path $publishDataPath) {
  Copy-Item -Path $publishDataPath -Destination $localDataPath -Force
}

Update-AppDataReference -Path $indexPath -ReferencePrefix "data/"
Update-AppDataReference -Path $guidedPath -ReferencePrefix "data/"
Update-AppDataReference -Path $morningPath -ReferencePrefix "../data/"
Update-AppDataReference -Path $briefPath -ReferencePrefix "../data/"

if ($SkipCommit) {
  Write-Host "Bundle synced. Skipping git commit/push."
  exit 0
}

Push-Location $githubPagesRoot
try {
  git add data/ame-proof-app-data.js index.html guided-demo.html artifacts/ame-proof-morning-digest.html artifacts/ame-proof-daily-briefing.html tools/publish-live-pipeline.ps1
  $pending = git status --porcelain

  if (-not $pending) {
    Write-Host "No Git changes to commit."
    exit 0
  }

  if (-not $CommitMessage) {
    $CommitMessage = "Refresh demo from live AME pipeline run"
  }

  git commit -m $CommitMessage

  if (-not $SkipPush) {
    git push origin main
  } else {
    Write-Host "Commit created. Skipping push."
  }
}
finally {
  Pop-Location
}
