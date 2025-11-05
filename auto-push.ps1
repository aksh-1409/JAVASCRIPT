# Automated Git Push Script
# Pushes files one at a time with delays

# List of files to push (modify this array as needed)
$filesToPush = @(
    "87.js",
    "88.js",
    "89.js",
    "90.js",
    "91.js",
    "92.js",
    "93.js",
    "94.js",
    "95.js",
    "96.js",
    "97.js",
    "98.js",
    "99.js",
    "100.js",
    "101.js",
    "102.js",
    "TOPICS_INDEX.md",
    "index2.html",
    "index3.html"
)

# Delay in seconds between pushes
$delaySeconds = 6

Write-Host "Starting automated git push process..." -ForegroundColor Green
Write-Host "Total files to push: $($filesToPush.Count)" -ForegroundColor Cyan
Write-Host ""

foreach ($file in $filesToPush) {
    Write-Host "================================================" -ForegroundColor Yellow
    Write-Host "Processing: $file" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Yellow
    
    # Check if file exists
    if (-Not (Test-Path $file)) {
        Write-Host "WARNING: File $file not found. Skipping..." -ForegroundColor Red
        continue
    }
    
    # Git add
    Write-Host "[1/3] Adding $file..." -ForegroundColor White
    git add $file
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to add $file" -ForegroundColor Red
        continue
    }
    
    # Git commit
    Write-Host "[2/3] Committing $file..." -ForegroundColor White
    git commit -m "Add $file"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to commit $file" -ForegroundColor Red
        continue
    }
    
    # Git push
    Write-Host "[3/3] Pushing $file..." -ForegroundColor White
    git push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to push $file" -ForegroundColor Red
        continue
    }
    
    Write-Host "SUCCESS: $file has been pushed!" -ForegroundColor Green
    
    # Wait before next file (skip delay after last file)
    if ($file -ne $filesToPush[-1]) {
        Write-Host "Waiting $delaySeconds seconds before next push..." -ForegroundColor Magenta
        Start-Sleep -Seconds $delaySeconds
        Write-Host ""
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Yellow
Write-Host "All files processed successfully!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Yellow
