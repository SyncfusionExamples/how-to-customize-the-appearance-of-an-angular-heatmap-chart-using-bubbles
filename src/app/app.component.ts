import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeatMapModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public cellSettings: Object = {
    tileType: 'Bubble',
    bubbleType: 'SizeAndColor',
    isInversedBubbleSize: true
  };
  public titleSettings: Object = {
    text: 'Sales Revenue per Employee (in $1000 USD)'
  };
  public xAxis: Object = {
    labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert',
        'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
  };
  public yAxis: Object = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };
  public heatMapData : Object[] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
 ];
 public paletteSettings: Object = {
  palette: [{ color: '#DCD57E' },
  { color: '#A6DC7E' },
  { color: '#7EDCA2' },
  { color: '#6EB5D0' }
  ],
};
  title = 'myangularapp';
}
