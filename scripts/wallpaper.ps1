# PowerShell script to change the desktop wallpaper from a URL
param (
    [string]$imageUrl = "!!!!!!!!!!!!!!!!!!PUT URL HERE!!!!!!!!!!!!!!!!!!!",
    [string]$localPath = "$env:USERPROFILE\Downloads\wallpaper.jpg"
)

# Download the image from the URL
Invoke-WebRequest -Uri $imageUrl -OutFile $localPath

# Add some delay to ensure the file is fully downloaded before proceeding
Start-Sleep -Seconds 3

# Check if the image was downloaded
if (Test-Path $localPath) {
    # Use the SystemParametersInfo function to set the wallpaper
    Add-Type @"
        using System;
        using System.Runtime.InteropServices;
        public class Wallpaper {
            [DllImport("user32.dll", CharSet=CharSet.Auto)]
            public static extern int SystemParametersInfo(int uAction, int uParam, string lpvParam, int fuWinIni);
        }
"@
    # Set wallpaper action code (20) and apply the wallpaper
    [Wallpaper]::SystemParametersInfo(0x0014, 0, $localPath, 0x0001)
    
    Write-Host "Wallpaper updated successfully!"
} else {
    Write-Host "Failed to download image."
}