const express = require('express');
const router = express.Router();
const upload = require('./middlewares/uploadImagem');

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');
const ConsumoController = require('./controllers/consumoController');
const ServicosAdicionaisController = require('./controllers/servicoAdicionalController');
const ReservasServiceController = require('./controllers/reservaController');
const UsuariosController = require('./controllers/usuariosController');
const AvaliacoesService = require('./controllers/avaliacoesController');
const authController = require('./controllers/authController');

router.post('/auth', authController.login);

router.get('/acomodacoes', AcomodacoesController.getAll);
router.post(
	'/acomodacoes',
	upload.single('imagem'),
	AcomodacoesController.insert
);
router.put('/acomodacoes/:id', upload.single('imagem'), AcomodacoesController.update);

router.get('/avaliacao', AvaliacoesService.getAll);
router.post('/avaliacao', AvaliacoesService.insert);
router.put('/avaliacao/:id_avaliacao', AvaliacoesService.update)

router.get('/consumo', ConsumoController.getAll);
router.post('/consumo', ConsumoController.insert);
router.put('/consumo/:id_consumo',ConsumoController.update);

router.get('/enderecos', EnderecoController.getAll);
router.post('/enderecos', EnderecoController.insert);
router.put('/enderecos/:id_endereco', EnderecoController.update);

router.get('/reservas', ReservasServiceController.getAll);
router.post('/reservas', ReservasServiceController.insert);
router.put('/reservas/:id_reserva', ReservasServiceController.update)

router.get('/servicosAdicionais', ServicosAdicionaisController.getAll);
router.post('/servicosAdicionais', ServicosAdicionaisController.insert);
router.put('/servicosAdicionais/:id_servico_adicional', ServicosAdicionaisController.update)

router.get('/usuarios', UsuariosController.getAll);
router.post('/usuarios', UsuariosController.insert);
router.put('/usuarios/:id_usuario', UsuariosController.update)

module.exports = router;
