
const cut_config = {
    "barrel_module": true, "annulus_module": true, "strip_hits": true, "traccc_athena": true
};

const barrel_image = [
'barrel_width.png',
'barrel_length.png',
'barrel_cells.png',
'barrel_shift.png',
'barrel_stripPitch.png',
'barrel_stripLength.png',
'barrel_phiStripPatternCentre.png',
'barrel_etaStripPatternCentre.png',
'barrel_phiPitch.png',
'barrel_etaPitch.png',
'barrel_thickness.png',
'barrel_barrel_ec.png',
'barrel_layer_disk.png',
'barrel_phi_module.png',
'barrel_eta_module.png',
'barrel_width_stripPitch.png',
'barrel_length_stripPitch.png',
];

const annulus_image = [
'annulus_width.png',
'annulus_length.png',
'annulus_cells.png',
'annulus_shift.png',
'annulus_stripPitch.png',
'annulus_thickness.png',
'annulus_barrel_ec.png',
'annulus_layer_disk.png',
'annulus_phi_module.png',
'annulus_eta_module.png',
'annulus_width_stripPitch.png',
'annulus_length_stripPitch.png',
];

const traccc_athena_image = [
    "diff_mea_ec.png",  "diff_mea_ec_log.png",  "diff_num_mea.png",  "diff_num_mea_ec.png"
];

const strip_hits_image= [
    "strip_localx_localy.png",  "strip_r_global_z.png",  "strip_stripID.png",
    'strip_stripID.png', 'strip_chipID.png', 'strip_offset.png',
'strip_ITkStripID.png', 'strip_idPhiIndex.png', 'strip_idEtaIndex.png', 'strip_barrel_ec.png', 
'strip_layer_disk.png', 'strip_side.png', 'strip_phi_module.png', 'strip_eta_module.png', 
'strip_local_x.png', 'strip_local_y.png', 'strip_global_x.png', 'strip_global_y.png', 
'strip_global_z.png', 'strip_center0.png', 'strip_center1.png', 'strip_center2.png', 
'strip_thickness.png', 'strip_width.png', 'strip_length.png', 'strip_phiPitch.png', 'strip_etaPitch.png',
];

const imageMap = {
    "barrel_module": {
        images: barrel_image,
        path: 'plots/barrel',
        title: 'Barrel Module'
    },
    "annulus_module": {
        images: annulus_image,
        path: 'plots/annulus',
        title: 'Annulus Module'
    },
    "traccc_athena": {
        images: traccc_athena_image,
        path: 'plots/traccc_athena',
        title: 'Traccc vs. Athena'
    },
    "strip_hits": {
        images: strip_hits_image,
        path: 'plots/strip_hits',
        title: 'Strip Hits'
    }
};  