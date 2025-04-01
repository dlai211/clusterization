
const cut_config = {
    "barrel_module": true, "annulus_module": true, "strip_hits": true, "traccc_athena": true
};

const barrel_image = [
    "barrel_barrel_ec.png",              "barrel_phiStripPatternCentre.png",
"barrel_cells.png",                  "barrel_phi_module.png",
"barrel_etaPitch.png",               "barrel_shift.png",
"barrel_etaStripPatternCentre.png",  "barrel_stripLength.png",
"barrel_eta_module.png",             "barrel_stripPitch.png",
"barrel_layer_disk.png",             "barrel_thickness.png",
"barrel_length.png",                 "barrel_width.png",
"barrel_phiPitch.png"
];

const annulus_image = [
    "annulus_barrel_ec.png",   "annulus_length.png",      "annulus_thickness.png",
"annulus_cells.png",       "annulus_phi_module.png",  "annulus_width.png",
"annulus_eta_module.png",  "annulus_shift.png",
"annulus_layer_disk.png",  "annulus_stripPitch.png"
];

const traccc_athena_image = [
    "diff_mea_ec.png",  "diff_mea_ec_log.png",  "diff_num_mea.png",  "diff_num_mea_ec.png"
];

const strip_hits_image= [];

const imageMap = {
    "barrel_module": {
        images: barrel_image,
        path: 'plots/barrel/',
        title: 'Barrel Module'
    },
    "annulus_module": {
        images: annulus_image,
        path: 'plots/annulus/',
        title: 'Annulus Module'
    },
    "traccc_athena": {
        images: traccc_athena_image,
        path: 'plots/traccc_athena/',
        title: 'Traccc vs. Athena'
    },
    "strip_hits": {
        images: strip_hits_image,
        path: 'plots/strip_hits/',
        title: 'Strip Hits'
    }
};  