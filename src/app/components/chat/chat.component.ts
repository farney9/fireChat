import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) {
    this._cs.uploadMessages()
            .subscribe(()=> {
              setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
              }, 20);
            });
   }

   ngOnInit(){
      this.elemento = document.getElementById('app-mensajes')
    //  if (this._cs.user.uid)  {
    //    console.log(this._cs.user.uid);
    //    this.elemento = document.getElementById('app-mensajes')
    //  } 

   }
   

  sendMessage(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this._cs.addMessage(this.mensaje)
            .then(() => this.mensaje="")  
            .catch((err) => console.error('Error al enviar', err));
  }

}
