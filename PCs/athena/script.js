    let grandTotal = 850; // initial total based on default items

        function toggleItem(button, price) {
            const row = button.closest('tr');
            const isRemoved = button.innerText === 'Remove';

            if (isRemoved) {
                grandTotal -= price;
                button.innerText = 'Add';
                row.style.backgroundColor = '#222';
            } else {
                grandTotal += price;
                button.innerText = 'Remove';
                row.style.backgroundColor = row.rowIndex % 2 === 0 ? '#333' : '#444';
            }

            document.querySelector('.total').innerText = `Grand Total: $${grandTotal}`;
        }


document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel-container');
  const panelInfo = document.getElementById('panel-info');

  panels.forEach(panel => {
    const control = panel.querySelector('.panel-control');
    control.addEventListener('change', () => {
      if (control.checked) {
        updateInfo(panel);
      }
    });
  });

  function updateInfo(panel) {
    const info = panel.dataset.info;

    // Add fade-out class to start the fade-out animation
    panelInfo.classList.add('fade-out');

    // Wait for the fade-out animation to complete
    setTimeout(() => {

    // Add your own dynamic content based on panel info
    switch (info) {
      case 'Prime':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>$500</td>
                <td>1</td>
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>$250</td>
                <td>1</td>
                
            </tr>
            <tr data-price="100">
                <td>RAM</td>
                <td>$100</td>
                <td>2</td>
                
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="total">Grand Total: $850</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
        `;
        break;
      // Add more cases for other panels
      

       case 'Apex':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>$500</td>
                <td>1</td>
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>$250</td>
                <td>1</td>
                
            </tr>
            <tr data-price="100">
                <td>RAM</td>
                <td>$100</td>
                <td>2</td>
                
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="total">Grand Total: $850</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
        `;
        break;

        case 'Edge':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>$500</td>
                <td>1</td>
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>$250</td>
                <td>1</td>
                
            </tr>
            <tr data-price="100">
                <td>RAM</td>
                <td>$100</td>
                <td>2</td>
                
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="total">Grand Total: $850</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
        `;
        break;

         case 'Nova':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>$500</td>
                <td>1</td>
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>$250</td>
                <td>1</td>
                
            </tr>
            <tr data-price="100">
                <td>RAM</td>
                <td>$100</td>
                <td>2</td>
                
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="total">Grand Total: $850</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
        `;
        break;

      default:
        panelInfo.innerHTML = '<p>No information available.</p>';
    }
  
      // Add fade-in class to start the fade-in animation
      panelInfo.classList.remove('fade-out');
      panelInfo.classList.add('fade-in');
    }, 500); // The duration should match the CSS transition duration
  }

  // Initialize the info section with the default checked panel
  const defaultPanel = document.querySelector('.panel-control:checked').closest('.panel-container');
  if (defaultPanel) {
    updateInfo(defaultPanel);
  }
});
