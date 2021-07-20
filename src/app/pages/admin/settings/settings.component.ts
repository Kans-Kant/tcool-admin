import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchingInputsValidator } from '../../home/validators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  changePasswordForm: FormGroup;
  credentials = { 'email': '', 'password': '', 'newPassword': '' };

  constructor(
    /*private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,*/
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.changePasswordForm = new FormGroup({
      'currentPassword': new FormControl('', [Validators.required]),
      'newPassword': new FormControl('', [Validators.required]),
      'confirmPassword': new FormControl('', [Validators.required]),
    }, matchingInputsValidator('newPassword', 'confirmPassword'));
  }

  onUpdate() {

    /*this.credentials.email = this.tokenStorage.getUser().email;
    this.credentials.password = this.changePasswordForm.value.currentPassword;
    this.credentials.newPassword = this.changePasswordForm.value.newPassword;

    this.userService.updatePassword(this.credentials).subscribe(
      (data) => {
        Swal.fire({
          'icon': "success",
          "text": "Your password has been changed",
          "showConfirmButton": true
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(["../profile"], { relativeTo: this.route })
          }
        })
      }, (err) => {
        Swal.fire({
          'icon': 'error',
          'text': 'sorry! we cannot update your password yet, retry later!',
          'timer': 5000
        })
      })*/
      alert("account updated successfully");
  }

}
