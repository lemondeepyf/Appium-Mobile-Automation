# Appium-Mobile-Automation
Tugas Akhir Task 2 - (Yustiana Fauziyah) mobile testing menggunakan appium 

## Prasayarat
1 Node.js
2 Java SDK lalu set JAVA_HOME environment variable
3 Android Studio lalu set ANDROID_HOME environment variable
4 Appium Desktop / (appium command prompt) 

## Instalasi 
```bash 
npm install
```
## Run 
```bash 
npm run wdio
```
## HARTA KARUN 
Penemuan case unik selama mencoba menjalankan mobile automation. Problem diawali dengan gagalnya melakukan create session, kami menyebutnya "error yang sama, penyelesaian yang berbeda". Karena 
Asumsi awal : saat running mobile automation tidak boleh menjalankan appium GUI secara bersamaan 

setelah melakukan asumsi tersebut, hasil yang didapatkan sesuai dan tidak sesuai.
Sesuai karena ada sebagian orang berhasil running tanpa appium server GUI
Tidak sesuai karena sebagian lagi masih berada pada error yang sama meski tidak menjalankan appium server GUI secara bersamaan 

Lalu, ditemukan bahwa sebagian melakukan running dengan menjalankan aapium server secara bersamaan
daaaaann, MAGICLY IT WORKS. 

sehingga beberapa dijalankan bersamaan menggunakan appium server dan sebagian lainnya tidak 


