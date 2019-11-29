<html>
    <head>
            <style>
                    #messages{
                        width: 95%;
                        max-width: 400px;
                        height: 350px;
                        overflow-y: scroll;
                        border: 1px solid #eee;
                        box-shadow: 0px 0px 20px #ccc inset;
            
                    }
                    .message{
                        margin: 20px;
                        padding: 5px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        background: white;
                    }
                </style>
    </head>
  <body>
    <p id='server-time'></p>
    
    <div id="messages"></div>

    <form method="POST" action="chat.html">
        <input id="nickname" type="text" name="nickname" placeholder="Nickname"/>           
        <input type="submit" value="Enviar"/>
    </form>
    
    
  </body>
</html>