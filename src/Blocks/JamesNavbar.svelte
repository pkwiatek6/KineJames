<script lang="ts">
    import {
        Button,
        Collapse,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        ButtonDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from 'sveltestrap';

    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
    
    let open = false;
    const toggle = () => (open = !open);

  </script>
  
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Kine James</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink>
              
            </NavLink>
        </NavItem>
          <ButtonDropdown inNavbar>
            <DropdownToggle caret color="primary">Characters</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Save</DropdownItem>
              <DropdownItem on:click={toggle}>Login
                <Modal isOpen={open} fade={false} {toggle}>
                  <ModalHeader {toggle}>Login to KineJames</ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="userName"></Label>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" on:click={toggle}>Login</Button>
                    <Button color="secondary" on:click={toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
      </Nav>
    </Collapse>
  </Navbar>