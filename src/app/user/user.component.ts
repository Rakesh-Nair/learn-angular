import { Component, computed, signal,Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

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
   @Input({required : true}) user!:  User;
  @Input ({required : true}) selected! : boolean;
   @Output() select = new EventEmitter<string>();
   //select = output<string>();

  //avatar = input.required<string>();
  //name = input.required<string>();
  onSelectUser(event: Event){
    this.select.emit(this.user.id);
  }
}
