<script lang="ts">
    import type { Character } from "../Data/Character";
    export let Character: Character;
    let TextWidth = "w-25"
    
    </script>
    <!--HTLM goes here-->
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text {TextWidth}" id="Name">Name:</span>
                        <input type="text" class="form-control" value="{Character.Name}" aria-label="Character Name" aria-describedby="Name" />
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Player">Player:</span>
                        <input type="text" class="form-control" value="{Character.User}" aria-label="Player Name" aria-describedby="Player" />
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Nature">Natrue:</span>
                        <input type="text" class="form-control" value="{Character.Natrue}" aria-label="Nature" aria-describedby="Nature" />
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Demeanor">Demeanor:</span>
                        <input type="text" class="form-control" value="{Character.Demeanor}" aria-label="Demeanor" aria-describedby="Demeanor" />
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Clan">Clan:</span>
                        <input type="text" class="form-control" value="{Character.Clan}" aria-label="Clan" aria-describedby="Clan" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        .row{
            margin-bottom: .5em;
        }
    </style>