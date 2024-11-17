import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//in order to find the random index of the dummy array
const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIdx]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //in order to change the users on click
  onSelectUser() {
    const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIdx]);
  }
}
