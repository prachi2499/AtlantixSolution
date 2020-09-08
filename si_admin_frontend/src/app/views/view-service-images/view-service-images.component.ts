import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ManageServicesService } from "../../services/manage-services.service";


@Component({
  selector: 'app-view-service-images',
  templateUrl: './view-service-images.component.html',
  styleUrls: ['./view-service-images.component.css']
})
export class ViewServiceImagesComponent implements OnInit {
  sub:any;
  s_id:number;
  arrimage:any[]=[];
  selectedFile : File = null;
  err:string;
  err1:string;
  constructor(private route:ActivatedRoute,private manageService : ManageServicesService,private router : Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.s_id = params["s_i_d"];

      if (this.s_id) {
        this.manageService.getAllImageByService(this.s_id).subscribe(
          (data:any)=>{
            this.arrimage=data;
          }
        );
      }
    });

  }

  addImage(){
    const fd = new FormData();
     fd.append('i_name',this.selectedFile);
     fd.append('s_id',this.s_id+"");
     
     this.manageService.addImage(fd)
     .subscribe((res:any)=>{
       console.log(res);
       this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.onSameUrlNavigation = "reload";
      this.router.navigate(["/dashboard/manageServices/serviceImages"], {
        queryParams: { s_i_d: this.s_id },
      });
      location.reload();
     })
}
  onChange(value){
    this.selectedFile = <File>value.target.files[0];
  }

  deleteImage(i_id){
    console.log(i_id);
    this.manageService.deleteImage(i_id)
    .subscribe((res:any)=>{
      this.err1="The picture is deleted successfully!";
    })
  }
}
