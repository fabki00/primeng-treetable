import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { NodeService } from '../node.service';
import { PrimeTemplate } from 'primeng/components/common/shared';

@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.css']
})
export class TreetableComponent implements OnInit {
  files1: TreeNode[];
  files2: TreeNode[];

  cols: any[];
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);

    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
  }
}
