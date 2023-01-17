import { Component, ViewChild } from '@angular/core';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('annotateText') ngxAnnotateText: NgxAnnotateTextComponent;

  text: string = 'my name is Dhia Mbarki, I From tunisia, I m full stack developer , I have more then 2 years experience in web applications.';

  annotations: Annotation[] = [
    new Annotation(3, 11, 'SKILLS', '#0069d9'),
    new Annotation(36, 45, 'EXPERIENCE', '#5a6268'),
    new Annotation(47, 52, 'DIPLOMA', '#28a745'),
    new Annotation(77, 85, 'DIPLOMA-MAJOR', '#dc3545'),
  ];

  addAnnotation(label: string, color: string) {
    if (this.ngxAnnotateText) {
      const selection = this.ngxAnnotateText.getCurrentTextSelection();
      if (selection) {
        this.annotations = this.annotations.concat(
          new Annotation(
            selection.startIndex,
            selection.endIndex,
            label,
            color,
          ),
        );
      }
    }
  }
}
