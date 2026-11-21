/* session 39
1- we put all data in app.ts (the parent) and if we need this data we use it by input
input=> to get data or properties,methods from parent 

2- we type for example : cartProducts=input.required(); to get data

3- we use services not in apis only we can use it to use their properties,methods,... 
in another component by inject the servies in any component i would

4- if we have in app.html(parent) and i want to access their
<app-product></app-product>
<app-product></app-product>
<app-product></app-product>

we use:
import { Component, ViewChildren} from '@angular/core';
import { ProductComponent } from './product/product';

@Component({
  selector: 'app-parent',
  imports: [ProductComponent],
  templateUrl: './app.html',
})
export class ParentComponent {
  @ViewChildren(ProductComponent)
}

now we get all childern and ui can edit any thing on them

6- if i have 2 components in app (thier are brothers) ,to communicate with others if i want to
use any thing from the child1 to child2 and the opposite we must use services
and write the properties,methods i want to use it alot on service and inject the service on all
components i would

7- Content projection
app.html:

<app-cart [id]="1" #Child1>
    <p>Hello</p>
</app-cart>

card.component.html:
<ng-content></ng-content>

all code that typed on tag pasted instead of 
<ng-content></ng-content>

8- in scss files if we use background img we must write the path of photo from the scss file not the public
if we type the path from public it work on local only
and dont work(img) on gitHub

9- Array ,Object rebuild
if we have loop to show products any change on loop happen if any change on arr happen
(the loop fell by changes if the arr or itemId changes because if one of them changes 
their referece changes then loop note the change ) ,but if i add the product the loop will note
because the id changes but if we add that product another time the id dont changes (HOW THE LOOP NOTE??)
the solution is rebuild the object by spread ... 

*/
