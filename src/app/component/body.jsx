import Image from "next/image";

const categories = [
  { id: 1, name: "Sea Food", icon: "🦐" },
  { id: 2, name: "Roast Food", icon: "🍖" },
  { id: 3, name: "Fast Food", icon: "🍔" },
  { id: 4, name: "Rice and Pasta", icon: "🍝" },
  { id: 5, name: "Desert", icon: "🍰" },
  { id: 6, name: "Hot Drinks", icon: "☕" },
  { id: 7, name: "Cold Drinks", icon: "🥤" },
];

const seafood = [
  { id: 1, name: "Fish Dish", price: 300, image: "/food/fish.jpg" },
  { id: 2, name: "Sushi", price: 200, image: "/food/sochy.jpg" },
  { id: 3, name: "Stick Fish", price: 250, image: "/food/stickfish.jpg" },
  { id: 4, name: "Sea Food", price: 300, image: "/food/seafood1.jpg" },
];
const roastfood=[
  {id:1 ,name: "Mix Dish" ,price:300,image:"food/michakil.jpg"},
  {id:2 ,name: "Steack",price: 250,image:"/food/steak.jpg"},
  {id:3,name:"Sish Tawook" ,price:200,image:"/food/شيش طاووق.jpg"},
  {id:4,name:"Shawarma",price:300,image:"/food/shorma.jpg"},
];
const fastfood=[
    {id:1 ,name: "Birgir" ,price:200,image:"/food/borgar.jpg"},
    {id:2,name:"Pizza" ,price:150,image:"/food/pizza.jpg"},
    {id:3,name:"Kintaki",price:200,image:"/food/kintaki.jpg"},
    {id:4,name:"Krip",price:200,image:"/food/shawerma.jpg"}
];
const rice=[
    {id:1,name :"Rice",price:200,image:"/food/kabsa.jpg"},
    {id:2,name:"Basmati",price:200,image:"/food/basmati.jpg"},
    {id:3,name:"Pasta",price:150,image:"/food/makarona1.jpg"},
    {id:4,name:"Bashamil",price:200,image:"/food/مكرونة بالبشاميل.jpg"}
];
const desert=[
    {id:1,name:"Conafa",price:50,image:"/food/konafa.jpg"},
    {id:2,name:"OmAli",price:60,image:"/food/ام علي🇪🇬.jpg"},
    {id:3,name:"Golash",price:50,image:"/food/glash.jpg"},
    {id:4,name:"Zalabia",price:40,image:"/food/baklawa.jpg"},
    {id:5,name:"BalahElsham",price:50,image:"/food/blahelsham.jpg"},
    {id:6,name:"Basbousa",price:70,image:"/food/basbousa– .jpg"}

];
const hotdrink=[
    {id:1,name:"Green Tea",price:40,image:"/food/tea.jpg"},
    {id:2,name:"Coffe",price:50,image:"/food/coffe.jpg"},
    {id:3,name:"Hot Choclete",price:60,image:"/food/hotchoclite.jpg"},
    {id:4,name:"Sahlab",price:50,image:"/food/sahlab.jpg"},
    {id:5,name:"Lemon Tea",price:40,image:"/food/lemontea.jpg"},
    {id:6,name:"Green Tea",price:50,image:"/food/greentea.jpg"}
];
const colddrink=[
    {id:1,name:"Orange Joice",price:30,image:"/food/orange.jpg"},
    {id:2,name:"Ice Coffe",price:40,image:"/food/icecoffe.jpg"},
    {id:3,name:"Milk Check",price:50,image:"/food/Milkshakes.jpg"},
    {id:4,name:"Pipse",price:40,image:"/food/neanaa.jpg"}
];

export default function Body() {
  return (
    <div className="body-container">
      <h1 className="categories-title">Check Categories</h1>
      <div className="categories-grid">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="category-card">
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </a>
        ))}
      </div>

      <section className="category-section" id="1">
        <h1 className="section-heading">Sea Food</h1>
        <div className="items-grid">
          {seafood.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="category-section" id="2">
        <h1 className="section-heading">Roast Food</h1>
        <div className="items-grid">
          {roastfood.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section" id="3">
        <h1 className="section-heading">Fast Food</h1>
        <div className="items-grid">
          {fastfood.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section" id="4">
        <h1 className="section-heading">Rice and Pasta</h1>
        <div className="items-grid">
          {rice.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section" id="5">
        <h1 className="section-heading">Desert</h1>
        <div className="items-grid">
          {desert.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section" id="6">
        <h1 className="section-heading">Hot Drinks</h1>
        <div className="items-grid">
          {hotdrink.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section" id="7">
        <h1 className="section-heading">Cold Drinks</h1>
        <div className="items-grid">
          {colddrink.map((item) => (
            <article key={item.id} className="item-card">
              <div className="item-card-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
