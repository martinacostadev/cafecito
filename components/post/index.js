import React from "react";

import style from "./style.scss";

const Post = () => (
    <div className={style.postContainer}>
        <div className={style.post}>
            <p>
                Hola! Soy <strong>Martín Acosta</strong>, actualmente trabajo
                como Full Stack Developer en una empresa de Rosario.
            </p>

            <p>
                💻 Estoy hace más de 10 años en el mundo de sistemas,
                principalmente centrado en lo que es sistemas Windows, web y este último año en aplicaciones móviles, tanto desarrollo
                FrontEnd como BackEnd.
            </p>

            <p>
                Me gusta mucho aprender, investigar, el código libre, sacar fotos, filmar y editar; el café y el sushi.
            </p>

            <p>
                Si tenés ganas de darme una mano podés regalarme un café ☕️ y
                te lo super voy a agradecer! ❤️
            </p>
            <p>
                Y si querés podés dejar tu nombre y un mensaje para que quede
                guardado y sepa quien me está ayudando!
            </p>

            <p>
                Y si querés podés dejar tu nombre y un mensaje para que quede
                guardado y sepa quien me está ayudando!
            </p>
        </div>
    </div>
);

export default Post;
