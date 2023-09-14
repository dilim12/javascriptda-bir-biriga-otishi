const changeHeading=()=>{
    const heading=document.getElementById('heading');
    const heading2=document.getElementById('heading2');
    heading.textContent="Turpis viverra";
    heading2.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente inventore dignissimos iure, ea cumque ipsa sint ratione! Cum soluta, voluptas quae neque accusantium quia magnam iste nulla reprehenderit provident ad veniam eos unde labore dignissimos atque facere animi eum, consectetur beatae temporibus esse omnis nemo officiis?  ";
}
const btn3=document.getElementById('changeHeadingBtn');
btn3.addEventListener('click',changeHeading);
const changeHeading2=()=>{
    const heading=document.getElementById('heading');
    const heading2=document.getElementById('heading2');
    heading.textContent="Phasellus venenatis";
    heading2.textContent="Aut eum et error quo maiores recusandae nisi deserunt eos unde exercitationem quos veniam, sit assumenda dolor temporibus? Nam iste facilis commodi. Explicabo accusantium harum quidem corporis quibusdam reiciendis! Doloremque laudantium cumque ab officiis illum assumenda maxime commodi nulla dolorum voluptate modi neque repellendus, in esse saepe architecto aperiam quod iure enim quo, dicta cupiditate corrupti vitae!"
}
const btn=document.getElementById('changeHeadingBtn2');
btn.addEventListener('click',changeHeading2);
const changeHeading3=()=>{
    const heading=document.getElementById('heading');
    const heading2=document.getElementById('heading2');
    const heading3=document.getElementById('heading3');
    heading.textContent="";
    heading2.textContent=" Doloremque laudantium cumque ab officiis illum assumenda maxime commodi nulla dolorum voluptate modi neque repellendus, in esse saepe architecto aperiam quod iure enim quo, dicta cupiditate corrupti vitae!Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    heading3.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente inventore dignissimos iure, ea cumque ipsa sint ratione! Cum soluta, voluptas quae neque accusantium quia magnam iste nulla reprehenderit provident ad veniam eos unde labore dignissimos atque facere animi eum, consectetur beatae temporibus esse omnis nemo officiis? "
}
const btn1=document.getElementById('changeHeadingBtn3');
btn1.addEventListener('click',changeHeading3);




