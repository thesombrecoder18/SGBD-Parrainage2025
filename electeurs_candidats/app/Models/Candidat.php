<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidat extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_parti_politique',
        'slogan',
        'code_securite',
        'photo',
        'trois_couleurs_parti',
        'url_page_infos',
    ];
}