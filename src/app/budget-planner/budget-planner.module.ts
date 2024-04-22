import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BarChartComponent } from './dashboard/Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard/Charts/pie-chart/pie-chart.component'; // Add this line
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddIncomeComponent } from './dashboard/add-income/add-income.component';
import { AddExpenseComponent } from './dashboard/add-expense/add-expense.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    DashboardComponent,
    SideNavComponent,
    AddIncomeComponent,
    AddExpenseComponent
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers:[FormBuilder],
})
export class BudgetPlannerModule {}
