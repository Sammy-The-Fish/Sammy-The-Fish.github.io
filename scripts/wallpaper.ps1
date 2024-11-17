# PowerShell script to change the desktop wallpaper from a URL
param (
    [string]$imageUrl = "https://imageswitcher.onrender.com/picture",
    [string]$localPath = "$env:USERPROFILE\Downloads\wallpaper.jpg"  # Always saves to the same file
)

# Download the image from the URL and overwrite the file if it already exists
Invoke-WebRequest -Uri $imageUrl -OutFile $localPath -ErrorAction Stop

# Check if the image was downloaded successfully
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