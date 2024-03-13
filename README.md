# MVC :

- MVC react-native,react,backend de kullanılan bir yazılım mimarisidir.
- Proje yönetiminde projenin bakım,onarım ve yönetim kısmında kolaylık sağlayan bir yöntemdir.

* Bu yöntemde bir komponent'i "View","Controler" ve "Model" olmak üzere üç'e ayırarak yönetim kolaylığı sağlanır.
* View dosyası jsx uzantılı olup kullanıcının göreceği kısmı tasarladığımız kodları içerir.(Kullanıcı etkileşimi olmayan dosyalar)
* Controler dosyasıda jsx uzantılı olup kullanıcı etkileşimli işlemleri bulunduran kodları içerir.(Butona tıklanınca şu olsun vs.)
* Model dosyası içerisinde sadece js kodları olduğundan dolayı .js uzantılı olan bu dosyada interaktif olaylar (api isteği vs.) kodları bu dosyada bulunur.

- Bu mimaride App.jsx'de Controler dosyası render edilir.
# mvc_form
