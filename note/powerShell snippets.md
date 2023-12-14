---
date-created: 2023-10-29
date-modified: 2023-10-30
tags:
  - windows
  - terminal
  - generete/gpt
  - code
  - powerShell
  - powerShell-snippet
  - windows
  - snippet
---

##
 Move files from folder to folder by content filter

I can't find any program that can do that  #generete/gpt

```bash
// windows power-shell
 Get-ChildItem | Where-Object {Select-String -Path $_.FullName -Pattern 'מילים-של-שירים'} | ForEach-Object
 {
>>     # Move the filtered files to the destination folder
>>     Move-Item -Path $_.FullName -Destination 'C:\עסקים 3\Valult 2 - of my life\lyric\'
>> }

```

- [!] destination folder must be exist as a folder before execute

## Rename Batch of Files, Replace part of there name to Empty

```bash
C:\עסקים 3\Valult 2 - of my life\comanies [main ≡ +17 ~1 -17 !]> Get-ChildItem -File |
 ForEach-Object {
>>     $newName = $_.Name -replace "^_"
>>     if ($newName -ne $_.Name) {
>>         Rename-Item -Path $_.FullName -NewName $newName
>>     }
>> }
```
