<section id="clientes">
    <div class="container mb-20">
        <div class="box-texto-cliente">
            <h1 class="fontTitulo">Clientes</h1>
            <p>São 40 anos de excelência em construção civil. Para acessar os trabalhos realizados para cada um de nossos clientes basta clicar nos logotipos abaixo.</p>
        </div>
        <div class="area-carousel">
            <div class="owl-carousel owl-theme">
                @for($i = 0;$i<14;$i++)
                    <a href="#">
                        <img src="{{url('site/img/bb.png')}}" />
                    </a>
                @endfor
            </div>
        </div>
    </div>
</section>