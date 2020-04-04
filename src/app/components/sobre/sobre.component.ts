import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent implements OnInit {

  public textVMV: string = 'Passe o mousse em um dos links acima';
  public visao: boolean = false;
  public missao: boolean = false;
  public valor: boolean = false;

  // colaboradores
  public karina: object = {
    nome: "Karina Aquino",
    img: "http://localhost:4200/assets/img/colaboradores/Karina.png",
    linkedin: "https://www.linkedin.com/in/karina-a-t-aquino/",
    github: "https://github.com/KarinaThomaz",
    workplace: "https://raiadrogasil.workplace.com/profile.php?id=100049626968120&sk=about",
    idade: "20 anos",
    hobbies: "livros e series",
    formacao: "Análise e desenvolvimento de sistema, Tecnologia da Informação - IFSP",
    experiencias: "Como Instrutora sou responsável por instruir alunos de diferentes idades nos cursos de Hardware, Web Design, Design de Games e Informática Adminisrativa.",
  };
  public ronaldo: object = {
    nome: "Ronaldo Mendes da Silva",
    img: "http://localhost:4200/assets/img/colaboradores/Ronaldo.png",
    linkedin: "https://www.linkedin.com/in/ronaldo-mendes-da-silva-b3382511a/",
    github: "https://github.com/ronaldomendes",
    workplace: "https://raiadrogasil.workplace.com/profile.php?id=100048154912711&sk=about",
    idade: "18 anos",
    hobbies: "musicas e jogos",
    formacao: "Bacharelado em Engenharia da Computação - Impacta Tecnologia",
    experiencias: "Recebimento e Armazenamento de materiais em geral (matéria prima e material de consumo). Venda de mercadorias com lançamento de materiais efetuado por meio de sistema informatizado",
  };
  public samuel: object = {
    nome: "Samuel Weslley",
    img: "http://localhost:4200/assets/img/colaboradores/Samuel.png",
    linkedin: "https://www.linkedin.com/in/samuel-weslley-126703181/",
    github: "https://github.com/SamuWesll",
    workplace: "https://raiadrogasil.workplace.com/profile.php?id=100048181071440&sk=about",
    idade: "25 anos",
    hobbies: "musicas e jogos",
    formacao: "Bacharelado em Engenharia da Computação - Univesp",
    experiencias: "Como Business Expert (analista de negocio) atuei na squad de Assinatura na RD, que tinha como objetivo de ajudar a P.O com as tomadas de decisões e com os processos operacionais.",
  };
  public uilson: object = {
    nome: "Uilson Ribeiro Campos",
    img: "http://localhost:4200/assets/img/colaboradores/Uilson.png",
    linkedin: "https://www.linkedin.com/in/uilson-ribeiro-campos-203b32141/",
    github: "https://github.com/Uilson2020",
    workplace: "https://raiadrogasil.workplace.com/profile.php?id=100049798951424&sk=about",
    idade: "38 anos",
    hobbies: "livros e series",
    formacao: "Graduação, Ciência da Computação - Uninove",
    experiencias: "Experiência profissional M e N – Montagem e instalação de elevadores – período 2 anos. Excel – intermediário. Word – intermediário. Power point – intermediário. Project - intermediário.",
  };

  public selecKarina: boolean = false;
  public selecRonaldo: boolean = false;
  public selecSamuel: boolean = false;
  public selecUilson: boolean = false;

  public imgColab: string = 'http://localhost:4200/assets/img/colaboradores/semImg.png';
  public textColab: string = null;
  public idadeColab: string = null;
  public hobbiesColab: string = null;
  public tituloColab: string = null;
  public experienciaColab: string = null;
  public linkLinkedin: string = null;
  public linkGithub: string = null;
  public linkWorkPlace: string = null;

  constructor() {

  }

  textVisao() {
    this.textVMV = `Permitir que todos possam deixar seu lar do jeitinho que desejam, abrangendo pequenos detalhes como os \n panos de prato da sua cozinha, que deixam de ser simples panos e passam a fazer parte da sua decoração.`;

    this.visao = true
    this.missao = false
    this.valor = false
  };

  textMissao() {
    this.textVMV = `Panos de pratos para todos os públicos!`;

    this.visao = false
    this.missao = true
    this.valor = false
  };

  textValor() {
    this.textVMV = `Respeito: ao consumidor e a nossa equipe. \n Responsabilidade ambiental: trabalhando sempre de maneira consciente. \n Respeito à diversidade: para construir um mundo mais justo. \n Fazer a diferença: parte do lucro de nossas vendas são revertidas para instituições de caridade.`;

    this.visao = false
    this.missao = false
    this.valor = true
  };

  // Selecionado colaborador
  selecionarKarina() {

    this.imgColab = this.karina['img'];
    this.textColab = this.karina['nome'];
    this.idadeColab = this.karina['idade'];
    this.hobbiesColab = this.karina['hobbies'];
    this.tituloColab = this.karina['formacao'];
    this.experienciaColab = this.karina['experiencias'];
    this.linkLinkedin = this.karina['linkedin'];
    this.linkGithub = this.karina['github'];
    this.linkWorkPlace = this.karina['workplace'];

    this.selecKarina = true;
    this.selecRonaldo = false;
    this.selecSamuel = false; 
    this.selecUilson = false;
  };
  selecionarRonaldo() {

    this.imgColab = this.ronaldo['img'];
    this.textColab = this.ronaldo['nome'];
    this.idadeColab = this.ronaldo['idade'];
    this.hobbiesColab = this.ronaldo['hobbies'];
    this.tituloColab = this.ronaldo['formacao'];
    this.experienciaColab = this.ronaldo['experiencias'];
    this.linkLinkedin = this.ronaldo['linkedin'];
    this.linkGithub = this.ronaldo['github'];
    this.linkWorkPlace = this.ronaldo['workplace'];

    this.selecKarina = false;
    this.selecRonaldo = true;
    this.selecSamuel = false; 
    this.selecUilson = false;
  };
  selecionarSamuel() {

    this.imgColab = this.samuel['img'];
    this.textColab = this.samuel['nome'];
    this.idadeColab = this.samuel['idade'];
    this.hobbiesColab = this.samuel['hobbies'];
    this.tituloColab = this.samuel['formacao'];
    this.experienciaColab = this.samuel['experiencias'];
    this.linkLinkedin = this.samuel['linkedin'];
    this.linkGithub = this.samuel['github'];
    this.linkWorkPlace = this.samuel['workplace'];

    this.selecKarina = false;
    this.selecRonaldo = false;
    this.selecSamuel = true; 
    this.selecUilson = false;
  };
  selecionarUilson() {

    this.imgColab = this.uilson['img'];
    this.textColab = this.uilson['nome'];
    this.idadeColab = this.uilson['idade'];
    this.hobbiesColab = this.uilson['hobbies'];
    this.tituloColab = this.uilson['formacao'];
    this.experienciaColab = this.uilson['experiencias'];
    this.linkLinkedin = this.uilson['linkedin'];
    this.linkGithub = this.uilson['github'];
    this.linkWorkPlace = this.uilson['workplace'];

    this.selecKarina = false;
    this.selecRonaldo = false;
    this.selecSamuel = false; 
    this.selecUilson = true;
  }

  

  ngOnInit(): void { }

}
