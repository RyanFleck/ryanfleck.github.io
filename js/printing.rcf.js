console.log("FSC2 printing.rcf.js loaded.");

    // Default export is a4 paper, portrait, using milimeters for units

      var content = document.getElementById('postcontent');
      console.log("Article print modules loaded.");


      document.getElementById("savepage1").onclick = function () {
      console.log("Printing with htmltoPDF.");
      html2pdf(content, {
        margin: 20,
        filename: '{{ page.title | escape }}.pdf',
        image: { quality: 0.6 },
        html2canvas: { dpi: 300, letterRendering: true}
      });
      console.log("Print with htmltoPDF finished.");
      };

      document.getElementById("savepage2").onclick = function () {
      console.log("Printing with jsPDF. (Does not function with images.)");
      var doc = new jsPDF('p', 'pt', 'letter');
      doc.canvas.height = 72 * 11;
      doc.canvas.width = 72 * 8.5;
      doc.fromHTML(content);
      doc.save('a4.pdf');
      console.log("Print with jsPDF finished.");
      };

      document.getElementById("savepage3").onclick = function () {
      console.log("Nope.");
      };
