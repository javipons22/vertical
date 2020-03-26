<?php include 'header.php'; ?>
<main class="container pb-4 contenido consulta">
    <div class="row">
        <h5 class="titulo-consultas my-5">- <span>FORMULARIO DE</span> CONTACTO -</h5>
    </div>
    <div class="row row-cols-1 row-cols-lg-2 mb-4 px-3 px-md-5">
        <div class="col mb-5 mb-lg-0">
            <form action="" class="consulta__formulario">
                <div class="form-row">
                    <div class="form-group col-12 col-md-6">
                        <input type="text" class="form-control" id="inputName" placeholder="Nombre">
                    </div>
                    <div class="form-group col-12 col-md-6">
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                    <div class="form-group col-12">
                        <select id="inputSucursal" class="form-control">
                            <option value="" selected>Elige sucursal a contactar...</option>
                            <option value="cordoba">Córdoba</option>
                            <option value="bsas">Buenos Aires</option>
                            <option value="rosario">Rosario</option>
                            <option value="losmolles">Los Molles</option>
                            <option value="sanrafael">San Rafael</option>
                            <option value="malargue">Malargue</option>
                            <option value="sanjuan">San Juan</option>
                            <option value="bariloche1">Bariloche 1</option>
                            <option value="bariloche2">Bariloche 2</option>
                            <option value="bariloche3">Bariloche 3</option>
                        </select>
                    </div>
                    <div class="form-group col-12">              
                        <textarea class="form-control" id="InputTextarea" rows="3" placeholder="Mensaje"></textarea>
                    </div>
                    <div class="form-group col-12">
                        <button type="submit" class="btn btn-primary btn-block py-2 consulta__btn-submit">Enviar Mensaje</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col consulta__contenedor-imagen">
            <img class="consulta__imagen" src="img/snowboarding.jpeg" alt="snowboarding">
        </div>
    </div>
<?php include 'footer.php'; ?>