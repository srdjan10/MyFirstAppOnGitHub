import React from "react";
import Card from "../component/Card";
import AddProduct from "../component/AddProduct";
import  className from "../component/Card.css";

const MoreProduct =()=>{

const products = [
        {
            id: "1",
            name: "Fine Check Casual All-Match Straight-Leg Pants",
            img: "https://m.media-amazon.com/images/I/61qogREhWLL._AC_UX342_.jpg",
            price: "7.32",
            short_description: "High-quality hardware zipper, not easy to break, highlighting the quality.",
            bullet_description: [
                "High-quality cotton fabric, soft and comfortable, skin-friendly and breathable, good warmth retention. Widened and high waist, straight-leg pants, good visual extension effect, modified leg shape, showing height and thinness. "
            ]
        },
        {
            id: "2",
            name: "Men S Color Round Neck Pullover Sweatshirt",
            img: "https://img.gkbcdn.com/p/2018-11-08/wy19-men-s-casual-round-neck-solid-color-sweatshirt-size-l-black-1571988177579._w500_p1_.jpg",
            price: "7.41",
            short_description: "Water based printing, Plastisol, Discharge, Glittery, 3D, Heat transfer, Tie Dye, etc.",
            bullet_description: [
                "Comfortable fabric, smooth and soft, skin-friendly and breathable. Threaded round neck, suitable elasticity, loose version, good tolerance. The high-quality threaded cuffs and hem have good elasticity and are not easily deformed. The colors are rich and the options are great."
            ]
        },
        {
            id: "3",
            name: "Men′ S Casual Color Cotton Overalls Pants",
            img: "https://image.made-in-china.com/202f0j00KWaulvEFHOzp/Men-s-a-Cotton-Loose-Straight-Multi-Pocket-Overalls-Casual-Pants.jpg",
            price: "12.07",
            short_description: "Loose casual workwear trousers, elastic waist, adapt to different leg types, good tolerance. Super multi-pocket design to meet storage needs and suitable for outdoor wear. Moderate thickness, can be worn in spring, summer and autumn. Pure color without pattern, versatile and fashionable.",
            bullet_description: [
                "Within 20-25 days after the receiving of the payment."
            ]
        },
        {
            id: "4",
            name: "Fashion Solid Color V-Neck Mermaid Dress",
            img: "https://image.made-in-china.com/202f0j00HNsVSwLdcIqj/Fashion-Solid-Color-V-Neck-Mermaid-Dress.webp",
            price: "9.01",
            short_description: "Comfortable fabric, soft and smooth, skin-friendly and breathable. Widen the waistline and modify the waistline. The ruffled hem, ruched design, is smart and elegant. Classic black and red colors, fashionable and versatile.",
            bullet_description: [
                "Plane Embroidery,3D Embroidery, Applique Embroidery, Gold/Silver Thread Embroidery, Gold/Silver Thread 3D Embroidery,Paillette"
            ]
        },
        {
            id: "5",
            name: "Vintage Green Print Dress Long Sleeve Dress",
            img: "https://ae01.alicdn.com/kf/H64575853daea4ccc8c89b54706b11382K/Vintage-Green-Floral-Print-Midi-Dress-Women-Sexy-V-Neck-Long-Sleeve-Slits-robe-High-Waist.jpg_Q90.jpg_.webp",
            price: "32.66",
            short_description: "Plane Embroidery,3D Embroidery, Applique Embroidery, Gold/Silver Thread Embroidery, Gold/Silver Thread 3D",
            bullet_description: [
                "Dark green with printed patterns, single-breasted design at the placket, full of retro feeling, highlighting the temperament. Small stand-up collar, regular long sleeves, bow tie at the waist, A-shaped version, overall slim. High-quality fabric, smooth and comfortable, with texture."
            ]
        },
        {
            id: "6",
            name: "Men S Plaid Long Sleeve Blouses",
            img: "https://sc04.alicdn.com/kf/H5af4c9b688294be6898b9817c62b5d60G.jpg",
            price: "8.8",
            short_description: "Water based printing, Plastisol, Discharge, Glittery, 3D, Heat transfer, Tie Dye, etc.",
            bullet_description: [
                "The overall solid color is decorated with check patterns on the collar, patch pockets, cuffs and placket. The plaid printing pattern is clear, and the color will not fade after repeated washing. High-quality cotton fabric, soft and comfortable, skin-friendly and breathable. Straight version, slightly looser, good tolerance."
            ]
        },
        {
            id: "7",
            name: "Men S Printed Short-Sleeved Blouses",
            img: "https://image.made-in-china.com/202f0j00uHqGkiMhgcop/Wholesale-Casual-Custom-Printed-Special-Design-Printed-Short-Sleeve-Shirt-for-Men.jpg",
            price: "10.62",
            short_description: "Water based printing, Plastisol, Discharge, Glittery, 3D, Heat transfer, Tie Dye, etc.",
            bullet_description: [
                "Advanced printing technology, high-quality dyes, clear patterns, high color fastness, and will not fade after repeated washing. Lapel collar, single-breasted button, and the neckline can be adjusted freely. The hem and cuffs are neatly routed and do not fall off, and the overall clothes are smooth and wrinkle-free. Comfortable fabric, skin-friendly and breathable."
            ]
        },
        {
            id: "8",
            name: "Women S Cotton Pullover Solid Color T-Shirt",
            img: "https://image.made-in-china.com/202f0j00kFolSqYtHgbU/Women-prime-S-Cotton-Pullover-Solid-Color-T-Shirt.jpg",
            price: "7.29",
            short_description: "The stitches at the seams are fine and tight, and the thread is smooth, and the thread does not fall off firmly.",
            bullet_description: [
                "Comfortable fabric, skin-friendly, breathable, and soft to the touch. Big round neck, one-shoulder style, front piece twist design, simple and small design, more fashionable and beautiful. "
            ]
        }
    ]

 return (
     <div className='item-container'>
         {products.map((prod)=>{
             return(
                 <Card>
                     <Card className='card'
                        key={prod.id}>
                        <h1>{prod.name}</h1>
                        <h3><b>Price:<i>{prod.price}$</i></b></h3>
                        <p><b>Description:</b>{prod.short_description}</p>
                        <img className="card2" src={prod.img} width='200' height='200' alt="online market"></img>
                        <p><b>Bullet description:</b>{prod.bullet_description}</p>
                        <AddProduct />
                        <button className='formbutton'>+ Add</button>
                     </Card>
                 </Card>
             )
         } )}
     </div>
 )
}
export default MoreProduct;