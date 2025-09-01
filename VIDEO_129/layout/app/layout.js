import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata = {
  title: "Facebook",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi laborum enim rerum magni asperiores ea natus esse maiores suscipit, debitis totam doloribus nobis, corporis sint ex vero recusandae odio dicta! Dolor suscipit beatae doloribus rem optio similique corporis culpa sapiente nesciunt. Quas laudantium vero commodi odit suscipit vel temporibus!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
