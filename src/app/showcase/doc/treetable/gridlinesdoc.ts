import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Code } from '../../domain/code';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'gridlines-doc',
    template: ` <section class="py-4">
        <app-docsectiontext>
            <p>Adding <i>p-treetable-gridlines</i> class displays grid lines.</p>
        </app-docsectiontext>
        <div class="card">
            <p-treeTable [value]="files" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }" styleClass="p-treetable-gridlines">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowNode let-rowData="rowData">
                    <tr [ttRow]="rowNode">
                        <td>
                            <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>
                            {{ rowData.name }}
                        </td>
                        <td>{{ rowData.size }}</td>
                        <td>{{ rowData.type }}</td>
                    </tr>
                </ng-template>
            </p-treeTable>
        </div>
        <app-code [code]="code" selector="tree-table-basic-demo"></app-code>
    </section>`
})
export class GridlinesDoc implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
    }

    code: Code = {
        basic: `
<p-treeTable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}" styleClass="p-treetable-gridlines">
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treeTable>`,

        html: `
<div class="card">
    <p-treeTable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td>
                    <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>
                    {{ rowData.name }}
                </td>
                <td>{{ rowData.size }}</td>
                <td>{{ rowData.type }}</td>
            </tr>
        </ng-template>
    </p-treeTable>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-table-gridlines-demo',
    templateUrl: './tree-table-gridlines-demo.html'
})
export class TreeTableGridlinesDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
    }
}`,

        service: ['NodeService']
    };
}
