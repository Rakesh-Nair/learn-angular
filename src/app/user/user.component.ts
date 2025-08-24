import { Component, computed, signal,Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector:  'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  // get imagePath(){
  //   return 'assets/users/'+this.avatar
  // }

  imagePath = computed(()=>'assets/users/'+this.avatar());
  // @Input({required : true}) avatar!: string;
  // @Input({required : true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  onSelectUser(){
    
  }
}
