<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Electeur extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'numero_telephone',
        'date_naissance',
        'sexe',
        'numero_carte_electeur',
        'numero_carte_identite',
        'numero_bureau_vote',
    ];
}