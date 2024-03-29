import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'web-mrk';
  icon = 'assets/img/sun.png';
  iconMoon = 'assets/img/moon.png';
  iconSun = 'assets/img/sun.png';
  cv = "https://docs.google.com/document/d/1tYP67lVL7F4BJyVPGA90BFvFNvBJIhVc/edit?usp=sharing&ouid=110481904985279152520&rtpof=true&sd=true"
  status = false;
  toggleTheme() {
    if (this.status) {
      document.body.classList.add('dark-mode');
      this.icon = this.iconSun;
      // add dark mode to footer
      document.getElementById('footer').classList.add('dark-mode-footer');
      document.getElementById('resume').classList.add('dark-mode-resume');
      
      this.status = false
    } else {
      document.body.classList.remove('dark-mode');
      this.icon = this.iconMoon;
      // remove dark mode from footer
      document.getElementById('footer').classList.remove('dark-mode-footer');
      document.getElementById('resume').classList.remove('dark-mode-resume');
      this.status = true
    }
  }
}
