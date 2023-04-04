#🕔 Junior Fullstack - Technical Test
### Ketentuan
  Buatlah fungsi menggunakan bahasa pemrograman dan framework apapun untuk menjawab soal-soal di bawah ini. Kemudian, temukan jawabannya.
  Jika diperlukan, buat 1 repository di github atau gitlab untuk submit source code (berikan akses ke email aditia.prasetio@qbit.co.id agar bisa mengakses repository'nya).
Questions

## Case 1 (Soal No.1-4)
Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini adalah sebagai berikut.
 ![image](https://user-images.githubusercontent.com/80618060/229696702-2548ce46-c862-425f-add1-3abcf8610443.png)
![image](https://user-images.githubusercontent.com/80618060/229696722-4b4f4ffe-3b67-46a8-9a0e-38ab929f5662.png)

 
1.	Buah apa saja yang dimiliki Andi? (fruitName)

     function namaBuah(buah){
     
        return console.log("Buah yang dimiliki andi ada "+ buah.map((e)=>e.fruitName))
        
    }

    namaBuah(fruits)

2.	Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan?  

     function jenisBuah(buah){
     
        return console.log("Andi membutuhkan " + [... new Set(buah.map((e)=>e.fruitType))].length + " wadah")
        
    }

    jenisBuah(fruits)

Dan ada buah apa saja di masing-masing wadah?

Isi wadah Buah Lokal : 

    function jenisBuah(buah){
    
        return console.log("Andi membutuhkan " + [... new Set(buah.map((e)=>e.fruitType))].length + " wadah")
        
    }

    jenisBuah(fruits)

 
Wadah Buah Import : 

    function buahImport(buah){
    
        return console.log(buah.filter((e)=>e.fruitType != "LOCAL").map((e)=>e.fruitName))
        
    }

    buahImport(fruits)
 
 
3.	Berapa total stock buah yang ada di masing-masing wadah?

 Isi Wadah buah import : 

     function totalBuahImport(buah){
     
       let total = 0
       let numbers = buah.filter((e)=>e.fruitType === "IMPORT").map((e)=>e.stock)
       for (let i = 0; i < numbers.length; i++){
           total += numbers[i]
       }
       return console.log(total)

    }

    totalBuahImport(fruits)
   
  Isi Wadah buah import : 

     function totalBuahLocal(buah){
       let total = 0
       let numbers = buah.filter((e)=>e.fruitType != "IMPORT").map((e)=>e.stock)
       for (let i = 0; i < numbers.length; i++){
           total += numbers[i]
       }
       return console.log(total)

    }

    totalBuahLocal(fruits) 
  
 
4.	Apakah ada komentar terkait kasus di atas? 

Tidak ada.


## Case 2 (Soal No.5)
Diketahui data berikut ini. 
 
5.	Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

    function countCommentIds(comments) {
      let totalCommentIds = 0;
      for (let comment of comments) {
        totalCommentIds++;
        if (comment.replies) {
          totalCommentIds += countCommentIds(comment.replies);
        }
      }
      return totalCommentIds;
    }

console.log(countCommentIds(comments)); // Output: 7

### Case 3 
6.	Buatlah minimal 1 halaman untuk memperkenalkan sebuah UMKM. Desain bebas. 
Buatlah semenarik mungkin. Boleh dibuat sebagai website ataupun mobile app 
(bebas pilih). Jika diperlukan, diperbolehkan untuk membuat backend sederhana.
 
