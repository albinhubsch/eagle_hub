/**
 *
 * Author: Albin Hubsch <albin.hubsch@gmail.com
 *
 * This part is responsible for communication with the app only on
 * local networks. Mainly to install the rpi system and give it login
 * credentials to firebase
 */

import express from "express";
import bodyParser from "body-parser";

export const Server = ()=>{

    const port = 8397;
    let server = express();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get("/", (req, res)=>{
        res.end("Boomchakalacka! we're live");
    });

    /**
     * Check if server is alive
     */
    server.get("/alive", (req, res)=>{
        res.end("Ye, sure im alive");
    });


    // Start server
    server.listen(port);

};
