import { Component, computed, signal,Input } from '@angular/core';
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

  //imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar);
  @Input({required : true}) avatar!: string;
  @Input({required : true}) name!: string;
  onSelectUser(){

  }
}
