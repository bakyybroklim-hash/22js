let kyrgyzWords = [
  "салам","дос","үй","мектеп","китеп","шаар","айыл",
  "тоо","суу","аба","күн","ай","жол","убакыт","жумуш",
  "акча","тамак","сабак","балдар","адам","жүрөк","ой",
  "тил","жашоо","келечек"
];
const container = document.getElementById("words");

kyrgyzWords.forEach((word) => {
  const p = document.createElement("p");
  p.textContent = word;
  p.classList.add("word-box");   // стилди коштук
  container.appendChild(p);
});
