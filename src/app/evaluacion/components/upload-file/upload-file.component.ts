import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evaluacion } from '../../interfaces/evaluacion-interface';
import { EvaluacionService } from '../../services/evaluacion.service';


import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  evaluacion: Evaluacion = null;
  file: File;
  nombre: string;

  uploadForm: FormGroup; 

  constructor(
    private evaluacionService: EvaluacionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit(): void{

    const formData = new FormData();
    formData.append('File', this.uploadForm.get('profile').value);

    this.evaluacionService.evaluar(formData).subscribe(
      data => {
        console.log(data);
        console.log(data.evaluacionTermico.envolvente1);

        localStorage.removeItem('ultimaEvaluacion');


        this.toastr.success('Archivo enviado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        localStorage.setItem('ultimaEvaluacion', JSON.stringify(data));
        this.siguiente();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    )
  }



  siguiente(): void{
    this.router.navigate(['/termico']);
  }



}
