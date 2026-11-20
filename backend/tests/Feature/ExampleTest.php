<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_backend_root_does_not_render_a_server_side_page(): void
    {
        $this->get('/')->assertNotFound();
    }
}
