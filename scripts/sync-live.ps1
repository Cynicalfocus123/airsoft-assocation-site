# Synchronize source into the local "live" mirror. Run from the canonical Git folder.
$source = Split-Path -Parent $PSScriptRoot
$live = Join-Path (Split-Path -Parent $source) 'airsoft-assocation-site-live'
$excluded = @('.git', 'node_modules', '.next', 'coverage', '.turbo', '.DS_Store')
New-Item -ItemType Directory -Force -Path $live | Out-Null
Get-ChildItem -Force $live | Where-Object { $excluded -notcontains $_.Name } | Remove-Item -Recurse -Force
Get-ChildItem -Force $source | Where-Object { $excluded -notcontains $_.Name } | Copy-Item -Destination $live -Recurse -Force
Write-Host "Synchronized $source -> $live"
