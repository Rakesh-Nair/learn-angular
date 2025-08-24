import { Component, computed, signal,Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector:  'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  get imagePath(){
    return 'assets/users/'+this.avatar
  }

  //imagePath = computed(()=>'assets/users/'+this.avatar);
   @Input({required : true}) avatar!: string;
   @Input({required : true}) name!: string;
   @Input({required : true}) id!: string;
   @Output() select = new EventEmitter();
   //select = output<string>();

  //avatar = input.required<string>();
  //name = input.required<string>();
  onSelectUser(event: Event){
    this.select.emit(this.id);
  }
}
