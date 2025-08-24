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
    return 'assets/users/'+this.user.avatar
  }

  //imagePath = computed(()=>'assets/users/'+this.avatar);
   @Input({required : true}) user!: {
    id : string;
    avatar : string;
    name : string;
   };

   @Output() select = new EventEmitter<string>();
   //select = output<string>();

  //avatar = input.required<string>();
  //name = input.required<string>();
  onSelectUser(event: Event){
    this.select.emit(this.user.id);
  }
}
