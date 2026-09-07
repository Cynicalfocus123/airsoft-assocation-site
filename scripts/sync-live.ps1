# Synchronize source into the local "live" mirror. Run from the canonical Git folder.
$source = Split-Path -Parent $PSScriptRoot
$live = Join-Path (Split-Path -Parent $source) 'airsoft-assocation-site-live'
$source = [IO.Path]::GetFullPath($source)
$live = [IO.Path]::GetFullPath($live)
if ((Split-Path -Parent $source) -ne (Split-Path -Parent $live) -or (Split-Path -Leaf $live) -ne 'airsoft-assocation-site-live' -or $source -eq $live) { throw 'Unsafe mirror target' }
$excluded = @('.git', 'node_modules', '.next', 'coverage', '.turbo', '.DS_Store', 'reports')
New-Item -ItemType Directory -Force -Path $live | Out-Null
Get-ChildItem -Force $live | Where-Object { $excluded -notcontains $_.Name } | ForEach-Object { Remove-Item -LiteralPath $_.FullName -Recurse -Force }
Get-ChildItem -Force $source | Where-Object { $excluded -notcontains $_.Name } | Copy-Item -Destination $live -Recurse -Force
Write-Host "Synchronized $source -> $live"
