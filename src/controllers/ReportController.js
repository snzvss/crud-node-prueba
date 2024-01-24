// En ReportController.js
const exceljs = require('exceljs');
const Usuario = require('../models/user');
const Area = require('../models/area');

async function generateExcelReport(req, res) {
  try {
    const usuariosConArea = await Usuario.findAll({
      include: [{
        model: Area,
        as: 'Area', 
      }],
    });

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('UsuariosPorArea');

    worksheet.columns = [
      { header: 'ID Usuario', key: 'id', width: 10 },
      { header: 'Nombres', key: 'nombres', width: 20 },
      { header: 'Apellidos', key: 'apellidos', width: 20 },
      { header: 'Área de Trabajo', key: 'area_nombre', width: 20 },
    ];

    usuariosConArea.forEach((usuario) => {
      worksheet.addRow({
        id: usuario.id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        area_nombre: usuario.Area ? usuario.Area.nombre : 'Sin área',
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=UsuariosPorArea.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error al generar el reporte en Excel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  generateExcelReport,
};
