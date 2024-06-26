<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasUuids, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'sendStatus',
        'totalPrice',
        'cart_id'
    ];
    protected $casts = [
        'id' => 'string'
    ];
    protected $primaryKey = "id";

    public function cart(): BelongsTo {
        return $this->belongsTo(Cart::class);
    }
}
