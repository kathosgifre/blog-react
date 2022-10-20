import React from "react";
import "./App.css";
import Blog from "./componentes/Blog.js";


class App extends React.Component{
  render() {
    return (
    <div className="App">
      <div className="contain-main">
        <h1>CONOZCAMOS UN POCO MÁS DE LOS LENGUAJES DE PROGRAMACIÓN MAS UTILIZADOS EN LA ACTUALIDAD...</h1>
        <Blog
          name="Guido van Rossum,"
          country="Haarlem, Países Bajos (31 de enero de 1956)."
          imagen="python"
          img="Photo python"
          business="Python."
          blog="Este lenguaje de gran capacidad permite desarrollar programas de todo tipo y posee múltiples ventajas. Es de código abierto, es decir, gratuito, por lo que las limitaciones de desarrollo de software son casi nulas.
          Además, es uno de los lenguajes de programación más sencillos de aprender debido a que su intención es parecerse al lenguaje humano. Desarrollar código en Python es como si diéramos órdenes a otra persona para que realice una acción. Es indicado para el manejo de datos, por lo que resulta uno de los lenguajes de programación backend más útiles."
        />
        <Blog
          name="James Gosling,"
          country="Calgary - Canadá, (19 de mayo de 1955)."
          imagen="java"
          img="Photo Java"
          business="JAVA."
          blog="Java sigue prometiendo ser uno de los lenguajes de programación de alto nivel más usados de todo el mercado laboral.  Hoy en día, cuenta con más de 9 millones de usuarios y está presente en más de 7 mil millones de dispositivos. Empresas como Adobe y Amazon suelen buscar talentos que dominen este lenguaje de programación. 

          Este lenguaje está orientado a objetos y puede usarse fuera de su propia plataforma. Por esto, se puede desarrollar software y código que puedan correr en otros ordenadores, incluso, en otros sistemas operativos.
          
          Otro punto a favor es su compatibilidad con versiones anteriores, algo que le permite ahorrar tiempo y dinero a las empresas. "
        />
        <Blog
          name="Dennis MacAlistair Ritchie,"
          country="Bronxville, Nueva York - Estados Unidos, (9 de septiembre de 1941)."
          imagen="C"
          img="Photo C"
          business="Lenguaje C."
          blog="C es uno de los lenguajes de programación más importantes en la actualidad, con el cual se desarrollan aplicaciones y sistemas operativos, a la vez que forma la base de otros lenguajes como Java, C++ o C#. Fue originalmente desarrollado por Dennis M. Ritchie entre 1969 y 1972 en los Laboratorios Bell, como evolución del lenguaje B."
        />
        <Blog
          name="Brendan Eich"
          country="Pittsburgh, Pensilvania, Estados Unidos, (4 de julio de 1961 (edad 61 años)"
          imagen="javascripts"
          img="Photo JS"
          business="JavaScript."
          blog="Javascript es otro de los lenguajes de programación más demandados a nivel mundial debido a su facilidad de uso y su alta compatibilidad. 
          
          En conclusión, JavaScript es un lenguaje de programación dedicado a objetos, cuya característica principal es el desarrollo y actualización de contenido multimedia e interactivo de páginas web."
        />
        <Blog
          name="Bjarne Stroustrup"
          country="CAarhus, Dinamarca, (30 de diciembre de 1950)."
          imagen="c++"
          img="Photo Sushi"
          business="C++."
          blog="¿Qué tanto sabes de C++? Se trata de uno de los lenguajes de programación de alto nivel en cuanto a posibilidades en el mundo de la manipulación de objetos. 

          Además, es un lenguaje muy usado para el desarrollo de videojuegos. Así que ya sabes: si te consideras gamer, esta es tu opción ideal para desarrollarte profesionalmente. La buena noticia es que se trata de un puesto laboral muy bien recompensado y demandado en el mercado actual."
        />
        <Blog
          name="Anders Hejlsberg"
          country="Copenhague, Dinamarca, diciembre de 1960."
          imagen="csharp"
          img="Photo C#"
          business="C#."
          blog="Este lenguaje de programación ha sido desarrollado por Microsoft. Está enfocado a objetos y su uso más común es la compilación de aplicaciones con ejecutables en .NET Framework. Se trata de un lenguaje con el que se pueden desarrollar aplicaciones de forma rápida y fácil, con la elegancia característica del estilo C."
        />
        <Blog
          name="Rasmus Lerdorf"
          country="Qeqertarsuaq (Godhavn), Groenlandia, 22 de noviembre de 1968."
          imagen="php"
          img="Photo Php"
          business="Php."
          blog="Este lenguaje se ganó su popularidad por su dinamismo para poder crear páginas web interactivas desde cero.

          Otra de las ventajas de este lenguaje es su posibilidad de ser código abierto. Esto permite tener una gran comunidad activa dispuesta a ayudar a los desarrolladores de todo el mundo."
        />
        <Blog
          name="Alan Cooper"
          country="C San Francisco, California, Estados Unidos, 3 de junio de 1952."
          imagen="visual"
          img="Photo Visual"
          business="visual Basic"
          blog="Visual Basic es un lenguaje de programación orientado a objetos desarrollado por Microsoft. El uso de Visual Basic agiliza y simplifica la creación de aplicaciones .NET con seguridad de tipos."
        />
      </div>
    </div>
  );
}
}

export default App;
