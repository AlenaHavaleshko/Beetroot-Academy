function Footer() {

 const onClick = () => {
  console.log("Footer click")
 }

 return (
 <footer onClick={onClick}></footer>
 );
}
export default Footer;